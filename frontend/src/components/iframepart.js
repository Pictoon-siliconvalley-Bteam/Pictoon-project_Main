export const Component = () => {

    const iframePart = () => {
      return {
        __html: '<iframe src="../../templates/index.html" width="1600px" height="100%"></iframe>',
      };
    };
  
    return (
  
        <div
          style={{ margin: 'auto', position: 'relative', width: '100%', height: '100%', overflow: 'hidden' }}
          dangerouslySetInnerHTML={iframePart()}
        />
  
    );
  };