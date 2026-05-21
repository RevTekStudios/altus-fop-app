import { useOutletContext } from 'react-router-dom';
import Badge from '../components/Badge.jsx';
import Button from '../components/Button.jsx';
import Card from '../components/Card.jsx';
import DemoNotice from '../components/DemoNotice.jsx';
import { mockVideos } from '../data/mockVideos.js';

export default function VideosPage() {
  const { role, openAction, showToast } = useOutletContext();

  return (
    <div className="stack">
      <DemoNotice
        items={[
          'Production should use YouTube, Vimeo, or private video hosting rather than storing large videos directly in the app.',
        ]}
        title="Video Hosting Note"
      />

      <div className="page-grid page-grid--three">
        {mockVideos.map((video) => (
          <Card key={video.id}>
            <div className="stack">
              <div className="quick-tile" style={{ minHeight: '160px', justifyContent: 'center' }}>
                <Badge tone="highlight">{video.length}</Badge>
                <strong>{video.category}</strong>
                <span className="hero-copy">Prototype video thumbnail</span>
              </div>
              <strong>{video.title}</strong>
              <p className="hero-copy">{video.description}</p>
              <div className="inline-actions">
                <Button onClick={() => showToast(`Opening ${video.title} preview.`)}>Watch Preview</Button>
                {role === 'admin' ? (
                  <Button onClick={() => openAction('Add Video Link', 'This will later save a hosted URL to Firestore.')} variant="primary">
                    Add Video Link
                  </Button>
                ) : null}
              </div>
            </div>
          </Card>
        ))}
      </div>

      {role === 'admin' ? (
        <Card>
          <div className="inline-actions">
            <Button onClick={() => showToast('Mock video notification sent to members.')}>Notify Members</Button>
          </div>
        </Card>
      ) : null}
    </div>
  );
}
