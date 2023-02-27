import css from './NotFoundPage.module.css';

const NotFoundPage = () => {
    return (
            <div className={css.error}>
                <h1>Sorry, the page for the above request was not found</h1>
                <p>Make sure you have entered the correct address</p>
            </div>
    )
}
export {NotFoundPage}