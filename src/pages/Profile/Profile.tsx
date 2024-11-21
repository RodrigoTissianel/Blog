import PostForm from './components/PostForm/PostForm';
import ProfileInfo from './components/ProfileInfo/ProfileInfo';

const Profile = () => {
    return (
        <>
            <section className="container pb-4">
                <div className="row">
                    <ProfileInfo />
                </div>
            </section>

            <section className="container">
                <h3>Adicionar um novo post</h3>
                <p className="mt-1">
                    Preencha os campos abaixo para adicionar um novo post ao
                    blog
                </p>
                <PostForm />
            </section>
        </>
    );
};

export default Profile;
