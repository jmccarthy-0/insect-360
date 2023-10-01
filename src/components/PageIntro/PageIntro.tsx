import { TaxonDetails } from '../../utils/ts/types';

import classes from './PageIntro.module.css';

interface PageIntroProps {
  content: TaxonDetails
}

const PageIntro = ({content: {binomialName, commonName, classifiedBy}}: PageIntroProps) => {
    return (
        <div className={classes['page-intro']}>
          <div className={classes['title-wrapper']}>
            <h1 className={`${classes['heading']}`}>
              <span className={`${classes['scientific-name']}`}>{binomialName}</span>
              {commonName && <span className={`${classes['common-name']}`}>{commonName}</span>}
            </h1>
            {classifiedBy && <p>({classifiedBy})</p>}
          </div>
        </div>
    );
}

export default PageIntro;