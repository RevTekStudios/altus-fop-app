import { useOutletContext } from 'react-router-dom';
import Button from '../components/Button.jsx';
import Card from '../components/Card.jsx';

const galleryItems = [
  'Member Appreciation Night',
  'Training Day Album',
  'Community Outreach Album',
  'Lodge Hall Highlights',
  'Awards and Recognition',
  'Event Setup Team',
];

export default function GalleryPage() {
  const { role, openAction, showToast } = useOutletContext();

  return (
    <div className="stack">
      <Card>
        <div className="section-title">
          <h2>Gallery</h2>
          {role === 'admin' ? (
            <div className="inline-actions">
              <Button onClick={() => openAction('Upload Photos', 'Gallery photo upload is mocked for this prototype.')}>
                Upload Photos
              </Button>
              <Button onClick={() => openAction('Create Album', 'Album creation will later map to Firestore + Storage.')}>
                Create Album
              </Button>
            </div>
          ) : null}
        </div>

        <div className="page-grid page-grid--three">
          {galleryItems.map((item, index) => (
            <Card key={item}>
              <div className="stack">
                <div className="quick-tile" style={{ minHeight: '190px', justifyContent: 'flex-end' }}>
                  <span className="hero-copy">FOP photo gallery placeholder</span>
                </div>
                <strong>{item}</strong>
                <p className="hero-copy">{6 + index} photos in this album</p>
                <Button onClick={() => showToast(`Opening ${item}.`)}>View Album</Button>
              </div>
            </Card>
          ))}
        </div>
      </Card>
    </div>
  );
}
