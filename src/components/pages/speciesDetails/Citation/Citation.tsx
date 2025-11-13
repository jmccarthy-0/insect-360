const Citation = () => {
    const today = new Date().toDateString();
    return (
        <details className="mx-auto inline-block max-w-full" open={true}>
            <summary className="mb-2 cursor-pointer not-italic text-primary-dark dark:text-primary-light">
                References
            </summary>
            <ol className="list-inside list-decimal text-sm text-primary-dark dark:text-primary-light">
                <li>
                    <cite className="not-italic">
                        GBIF Secretariat (2024).{' '}
                        <span className="italic">GBIF Backbone Taxonomy</span>.
                        Checklist dataset accessed via GBIF.org on {today}
                        .&nbsp;
                        <span className="block whitespace-nowrap">
                            <a
                                className="link"
                                href="https://doi.org/10.15468/39omei"
                                target="_blank"
                            >
                                https://doi.org/10.15468/39omei
                            </a>
                        </span>
                    </cite>
                </li>
            </ol>
        </details>
    );
};

export default Citation;
