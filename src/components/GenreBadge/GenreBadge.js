import css from './GenreBadge.module.css'

const GenreBadge = ({genre}) => {
    const {name} = genre;

    return (
        <div className={css.genre}>
            {name}
        </div>
    );
};
export {GenreBadge};