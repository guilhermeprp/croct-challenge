import AvatarUpload from '../../shared/components/upload/avatarUpload';
import './home.scss';

export default function Home(): JSX.Element {
  return (
    <div className="home-body">
      <AvatarUpload />
    </div>
  );
}
