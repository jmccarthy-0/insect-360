import { TaxonDetails } from '../utils/ts/types';

import classes from './PageIntro.module.css';

interface PageIntroProps {
  content: TaxonDetails
}

const PageIntro = ({content: {binomialName, commonName, classifiedBy}}: PageIntroProps) => {
    return (
        <div className={classes['page-intro']}>
          <div className={classes['title-wrapper']}>
            <h1 className={`${classes['heading']}`}><span className={'species'}>{binomialName}</span> {commonName && `- ${commonName}`}</h1>
            {classifiedBy && <p className='page-intro__descr'>({classifiedBy})</p>}
          </div>
        </div>
    );
}

export default PageIntro;