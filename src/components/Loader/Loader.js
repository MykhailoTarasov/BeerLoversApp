import { Hourglass } from 'react-loader-spinner';
import { LoaderContainer } from './Loader.Styled';

const Loader = () => {
    return (
        <LoaderContainer>
            <Hourglass
            visible={true}
            height="80"
            width="80"
            ariaLabel="hourglass-loading"
            wrapperStyle={{}}
            wrapperClass=""
            colors={['#b97b16', '#b97b16']}
          />
        </LoaderContainer>
    )
}

export default Loader;