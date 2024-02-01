import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import {
  Button,
  ErrMessageStyled,
  StyledField,
  StyledForm
} from './BeerForm.Styled';

const validation = Yup.object().shape({
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

  style: Yup.string()
    .required('This field is required!'),
});

const BeerForm = ({ onAdd }) => {
  return (
    <Formik
      initialValues={{
        beer: '',
        place: '',
        date: '',
        brewery: '',
        style: '',
      }}
      validationSchema={validation}
      onSubmit={(values, actions) => {
        onAdd(values);
        actions.resetForm();
      }}
    >
      <StyledForm>
        <label>
          <StyledField id="beer" name="beer" placeholder="Beer" />
          <ErrMessageStyled name="beer" />
        </label>

        <label>
          <StyledField id="place" name="place" placeholder="Place" />
          <ErrMessageStyled name="place" />
        </label>

        <label>
          <StyledField id="date" name="date" placeholder="Date" />
          <ErrMessageStyled name="date" />
        </label>

        <label>
          <StyledField id="brewery" name="brewery" placeholder="Brewery" />
          <ErrMessageStyled name="brewery" />
        </label>

        <label>
          <Field as="select" name="style">
            <option value="All">All</option>
            <option value="Imperial stout">Imperial stout</option>
            <option value="Milk stout">Milk stout</option>
            <option value="Stout">Stout</option>
            <option value="Irish stout">Irish stout</option>
            <option value="American IPA">American IPA</option>
            <option value="East Coast IPA">East Coast IPA</option>
            <option value="West Coast IPA">West Coast IPA</option>
            <option value="IPA">IPA</option>
            <option value="DIPA">DIPA</option>
            <option value="TIPA">TIPA</option>
            <option value="NE IPA">NE IPA</option>
            <option value="NE DIPA">NE DIPA</option>
            <option value="NE TIPA">NE TIPA</option>
            <option value="DDH IPA">DDH IPA</option>
            <option value="DDH DIPA">DDH DIPA</option>
            <option value="DDH TIPA">DDH TIPA</option>
            <option value="Milkshake IPA">Milkshake IPA</option>
            <option value="Porter">Porter</option>
            <option value="Baltic porter">Baltic porter</option>
            <option value="English porter">English porter</option>
            <option value="American porter">American porter</option>
            <option value="Barley wine">Barley wine</option>
            <option value="Mild">Mild</option>
            <option value="Schwarzbier">Schwarzbier</option>
            <option value="Amber ale">Amber ale</option>
            <option value="Flanders red ale">Flanders red ale</option>
            <option value="Red ale">Red ale</option>
            <option value="Berliner weisse">Berliner weisse</option>
            <option value="Lambic">Lambic</option>
            <option value="Witbier">Witbier</option>
            <option value="Weissbier">Weissbier</option>
            <option value="Blonde ale">Blonde ale</option>
            <option value="Hefeweizen">Hefeweizen</option>
            <option value="Bock">Bock</option>
            <option value="Brown ale">Brown ale</option>
            <option value="Doppelbock">Doppelbock</option>
            <option value="Dunkel">Dunkel</option>
            <option value="Dunkelweizen">Dunkelweizen</option>
            <option value="Old ale">Old ale</option>
            <option value="Oud bruin">Oud bruin</option>
            <option value="Wee heavy">Wee heavy</option>
            <option value="Pale ale">Pale ale</option>
            <option value="Bitter">Bitter</option>
            <option value="Eisbock">Eisbock</option>
            <option value="British golden ale">British golden ale</option>
            <option value="Gose">Gose</option>
            <option value="Helles bock">Helles bock</option>
            <option value="American pale ale">American pale ale</option>
            <option value="Belgian pale ale">Belgian pale ale</option>
            <option value="Saison">Saison</option>
            <option value="Kellerbier">Kellerbier</option>
            <option value="California common">California common</option>
            <option value="German helles">German helles</option>
            <option value="Munich helles">Munich helles</option>
            <option value="Gueuze">Gueuze</option>
            <option value="Kolsch">Kolsch</option>
            <option value="Marzen">Marzen</option>
            <option value="Vienna lager">Vienna lager</option>
            <option value="German pils">German pils</option>
            <option value="Czech pilsner">Czech pilsner</option>
            <option value="Lager">Lager</option>
            <option value="American lager">American lager</option>
          </Field>
          <ErrMessageStyled name="style" />
        </label>

        <Button type="submit">Add beer</Button>
      </StyledForm>
    </Formik>
  );
};

export default BeerForm;
