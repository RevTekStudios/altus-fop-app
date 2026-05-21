import { useOutletContext } from 'react-router-dom';
import Badge from '../components/Badge.jsx';
import Button from '../components/Button.jsx';
import Card from '../components/Card.jsx';
import DemoNotice from '../components/DemoNotice.jsx';
import { mockResources } from '../data/mockResources.js';

export default function ResourcesPage() {
  const { role, openAction, showToast } = useOutletContext();

  return (
    <div className="stack">
      <DemoNotice
        items={[
          'Documents are visual only and represent future Firestore metadata plus Storage file links.',
        ]}
        title="Resources Prototype"
      />

      <Card>
        <div className="section-title">
          <h2>Resource Library</h2>
          {role === 'admin' ? (
            <div className="inline-actions">
              <Button onClick={() => openAction('Upload Resource', 'Prototype upload flow placeholder.')}>
                Upload Resource
              </Button>
              <Button onClick={() => openAction('Create Folder', 'Folder creation will map to Firestore metadata.')}>
                Create Folder
              </Button>
            </div>
          ) : null}
        </div>

        <div className="page-grid page-grid--three">
          {mockResources.map((resource) => (
            <Card key={resource.id}>
              <div className="stack">
                <div className="section-title">
                  <strong>{resource.title}</strong>
                  <Badge tone="info">{resource.type}</Badge>
                </div>
                <p className="hero-copy">{resource.category}</p>
                <p className="hero-copy">Updated {resource.updatedAt}</p>
                <div className="inline-actions">
                  <Button onClick={() => showToast(`${resource.title} opened as a prototype.`)}>Open</Button>
                  {role === 'admin' ? (
                    <Button onClick={() => openAction('Edit Resource', `Prototype edit for "${resource.title}".`)}>
                      Edit Resource
                    </Button>
                  ) : null}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Card>
    </div>
  );
}
