export const Error404 = () => {
    const originalPath = window.location.pathname;

    return (
        <div>
            <h1>404 - Not Found</h1>
            <p>The requested path <strong>{originalPath}</strong> was not found on this server.</p>
        </div>
    );
};
