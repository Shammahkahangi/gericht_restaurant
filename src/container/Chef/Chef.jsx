import React from 'react';
import {images} from '../../constants'
import { SubHeading } from '../../components';

import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className='app__wrapper_img app_wrapper_img-reverse'>
      <img src={images.chef} alt="" />
    </div>
    <div className='app__wrapper_info'>
      <SubHeading title="Chef's Word" />
      <h1 className='headtext__cormorant'>What We Believe In</h1>

      <div className='app__chef-content'>
        <div className='app__chef-content_quote'>
          <img src={images.quote} alt="quote" />
          <p className='p__opensans'> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta, exercitationem qui. Quos quidem numquam error est alias soluta saepe recusandae molestiae. Quae perferendis hic perspiciatis debitis dolorem exercitationem, totam repudiandae. </p>
        </div>
          <p className='p__opensans'>Dicta, exercitationem qui. Quos quidem numquam error est alias soluta saepe recusandae molestiae. Quae perferendis hic perspiciatis debitis dolorem exercitationem, totam repudiandae. </p>
        
      </div>
      <div className='app__chef-sign'>
          <p>Kevin Luo</p>
          <p className='p__opensans'> Chef & Founder</p>
          <img src={images.sign} alt="" />
      </div>

    </div>
  </div>
);

export default Chef;
