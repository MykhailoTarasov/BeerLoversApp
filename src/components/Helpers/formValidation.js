import { beerStyles } from 'constants';
import * as Yup from 'yup';

const formValidation = Yup.object().shape({
    beer: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('This is a required field!'),
  
    place: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('This is a required field!'),
  
    date: Yup.string()
      .min(4, 'Too Short!')
      .max(10, 'Too Long!')
      .required('This is a required field!'),
  
    brewery: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('This is a required field!'),
  
    style: Yup.string().required('This is a required field!').notOneOf([beerStyles[0]], "Beer style should be specified!"),
  });

  export default formValidation;