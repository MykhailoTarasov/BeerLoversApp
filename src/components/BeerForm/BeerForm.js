import { Formik } from 'formik';
import formValidation from 'components/Helpers/formValidation';
import { beerStyles } from 'constants';

import {
  Button,
  StyledErrorMessage,
  StyledField,
  StyledForm,
  StyledLabel,
  StyledSelectField,
} from './BeerForm.Styled';

const BeerForm = ({ onAdd }) => {
  return (
    <Formik
      initialValues={{
        beer: '',
        place: '',
        date: '',
        brewery: '',
        style: beerStyles[0],
      }}
      validationSchema={formValidation}
      onSubmit={(values, actions) => {
        onAdd(values);
        actions.resetForm();
      }}
    >
      {({ values, setFieldValue }) => (
        <StyledForm>
          <StyledLabel>
            <StyledField id="beer" name="beer" placeholder="Beer" />
            <StyledErrorMessage name="beer" component="div" />
          </StyledLabel>

          <StyledLabel>
            <StyledField id="place" name="place" placeholder="Place" />
            <StyledErrorMessage name="place" component="span" />
          </StyledLabel>

          <StyledLabel>
            <StyledField id="date" name="date" placeholder="Date" />
            <StyledErrorMessage name="date" component="span" />
          </StyledLabel>

          <StyledLabel>
            <StyledField id="brewery" name="brewery" placeholder="Brewery" />
            <StyledErrorMessage name="brewery" component="span" />
          </StyledLabel>

          <StyledLabel>
            <StyledSelectField as="select" id="style" name="style"
             onChange={(event) => {
              const { id, value } = event.target;
              setFieldValue(id, value);
             }}
             >
              {beerStyles.map((style) => <option key={style} value={style}>{style}</option>)}
            </StyledSelectField>
            <StyledErrorMessage name="style" component="span" />
          </StyledLabel>

          <Button type="submit">Add beer</Button>
        </StyledForm>
      )}
    </Formik>
  );
};

export default BeerForm;