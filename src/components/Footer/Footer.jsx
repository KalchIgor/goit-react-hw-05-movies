export default function Footer() {
    return (
        <div color="textSecondary" align="center">
            © {" "}
            {new Date().getFullYear()}
            .| All Rights Reserved | Developed by
            <a
                color="inherit"
                href="https://github.com/KalchIgor"
                target="_blank"
                rel="noopener noreferrer"
                className="link"
            >
             {" "} Igor Kalchin
            </a>
        </div>
    );
}
