import { FallingLines } from 'react-loader-spinner'
import { Loader } from "../Spiner/Spiner.styled";

export const Spinner = () => {
    return (
      <Loader>
        <FallingLines
         color='#000'
         width="200"
         visible={true}
         ariaLabel='falling-lines-loading'
        />
      </Loader>
    );
  };

