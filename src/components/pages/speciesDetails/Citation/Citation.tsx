const Citation = () => {
    const today = new Date().toDateString()
    return (
        <div className="inline-block mx-auto max-w-full">
            <h2 className="not-italic text-primary-dark dark:text-primary-light mb-2">References</h2>
            <ol className="text-primary-dark dark:text-primary-light list-inside list-decimal text-sm">
                <li>
                    <cite className="not-italic">
                        GBIF Secretariat (2024). <span className="italic">GBIF Backbone Taxonomy</span>. Checklist dataset accessed via GBIF.org on {today}.&nbsp;
                        <a className="link" href="https://doi.org/10.15468/39omei" target="_blank">https://doi.org/10.15468/39omei</a> 
                    </cite>
                </li>
            </ol>
        </div>
    )
}

export default Citation