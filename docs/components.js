import React from 'react';
import { ComponentProvider, Head } from 'mdx-go';
import { useView, Compiler, Editor, Error } from 'react-view';
import presetTypescript from '@babel/preset-typescript';

import LogRocket from 'logrocket';
LogRocket.init('kztcdf/syntaxcodes');

const code = (props) => {
  const isLive = props.className.includes('language-.jsx');
  if (!isLive) return <pre {...props} />;
  const code = React.Children.toArray(props.children).join('');

  const params = useView({
    initialCode: code,
    scope: {},
    onUpdate: console.log
  });

  return (
    <>
      <Editor {...params.editorProps} language="tsx" />
      <Compiler {...params.compilerProps} presets={[presetTypescript]} />
      <Error {...params.errorProps} />
    </>
  );
};

const components = {
  code
};

export const Root = (props) => (
  <ComponentProvider components={components}>
    <Head>
      <title>React Syntax</title>
    </Head>
    <div style={{ padding: 10 }}>{props.children}</div>
  </ComponentProvider>
);
