import  './PageIntro.css';

const PageIntro = () => {
    return (
        <div className='page-intro'>
          <div className='page-intro__title-wrapper'>
            <h1 className='page-intro__heading species'>Protoxaea gloriosa</h1>
            <p className='page-intro__descr'>(Fox, 1893)</p>
          </div>
          <p className='binomen'><span className='species'>Megacilissa gloriosa</span> Fox, 1893; <span className='species'>Oxaea tristis</span> Gribodo, 1894; <span className='species'>Protoxaea gloriosa pallida</span> Cockerell, 1934</p>
        </div>
    );
}

export default PageIntro;