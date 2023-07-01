import { useAuth } from "../context/AuthContext";

function ProfilePage() {

  const {user} = useAuth()
  console.log(user)

  return <div>Perfil de usuario</div>;
}

export default ProfilePage;