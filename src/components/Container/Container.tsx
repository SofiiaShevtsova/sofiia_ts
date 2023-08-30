type MainProps = {
  children?: JSX.Element,
};

export const Container = ({ children }: MainProps) => {
    return (<main className="main">
        {children}
    </main>)
}
