/* eslint-disable @typescript-eslint/no-explicit-any */
import { StoreContext } from './hooks/useStore';

interface StoreProps {
  [key: string]: any;
}

const mapStateToPropsMock = (obj: any, props: StoreProps) => ({
  ...props,
});

const Connect = (mapStateToProps: any) => (Component: any) => {
  return (props: any) => {
    return (
      <StoreContext.Consumer>
        {({ dispatch, store }: any) => {
          const storeProps = mapStateToProps
            ? { ...mapStateToProps(store, props) }
            : { ...mapStateToPropsMock(store, props) };
          return <Component {...storeProps} dispatch={dispatch} />;
        }}
      </StoreContext.Consumer>
    );
  };
};

export default Connect;
