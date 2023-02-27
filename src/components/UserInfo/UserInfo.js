import userAvatar from './img/userAvatar.png';
import css from './UserInfo.module.css';

const UserInfo = () => {
    return (
        <div className={css.info}>
            <div>
                <img className={css.img} src={userAvatar} alt="userAvatar"/>
            </div>
            <div>
                <h4>Welcome back, mr. Giraffe</h4>
            </div>
        </div>
    );
};

export {UserInfo};