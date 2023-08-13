"use client";

import { FC, useEffect, useState } from "react";
import Highlight, { defaultProps, type Language } from "prism-react-renderer";
import { useTheme } from "next-themes";
import lightTheme from "prism-react-renderer/themes/vsLight";
import darkTheme from "prism-react-renderer/themes/vsDark";

interface CodeProps {
  code: string;
  show: boolean;
  language: Language;
  animationDelay?: number;
  animated?: boolean;
}

const Code: FC<CodeProps> = ({
  code,
  show,
  language,
  animated,
  animationDelay,
}) => {
  const [text, setText] = useState<string>(animated ? "" : code);
  const { theme: applicationTheme } = useTheme();

  useEffect(() => {
    if (show && animated) {
      let i = 0;
      setTimeout(() => {
        const intervalId = setInterval(() => {
          setText(code.slice(0, i));
          i++;
          if (i > code.length) {
            clearInterval(intervalId);
          }
        }, 15);

        return () => clearInterval(intervalId);
      }, animationDelay || 100);
    }
  }, [code, show, animated, animationDelay]);

  // it get the number of lines
  const lines = text.split(/\r\n|\r|\n/).length;
  const theme = applicationTheme === "light" ? lightTheme : darkTheme;

  return (
    <Highlight {...defaultProps} code={text} language={language} theme={theme} >
      {({ className, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={
            className +
            "transition-all w-fit bg-transparent duration-100 py-0 no-scrollbar"
          }
          style={{
            maxHeight: show ? lines * 24 : 0, // this height work on the length of the lines in line 41
            opacity: show ? 1 : 0,
          }}
        >
          {tokens.map((line, i) => {
            // eslint-disable-next-line no-unused-vars
            const { key, ...rest } = getLineProps({ line, key: i });
            return (
              <div key={`line-${i}`} style={{ position: "relative" }} {...rest}>
                {line.map((token, index) => {
                  // eslint-disable-next-line no-unused-vars
                  const { key, ...others } = getTokenProps({ token, i });
                  return <span key={index} {...others} />;
                })}
              </div>
            );
          })}
        </pre>
      )}
    </Highlight>
  );
};

export default Code;

// "use client"

// import { useTheme } from "next-themes";
// import Highlight, { defaultProps, type Language } from "prism-react-renderer";
// import lightTheme from "prism-react-renderer/themes/vsLight";
// import darkTheme from "prism-react-renderer/themes/vsDark";
// import { FC, useEffect, useState } from "react";

// interface CodeProps {
//   code: string;
//   show: boolean;
//   language: Language;
//   animationDelay?: number;
//   animated?: boolean;
// }

// const Code: FC<CodeProps> = ({
//   code,
//   show,
//   animated,
//   animationDelay,
//   language,
// }) => {
//   const { theme: applicationTheme } = useTheme();
//   const [text, setText] = useState<string>(animated ? "" : code);

//   useEffect(() => {
//     if (show && animated) {
//       let i = 0;
//       setTimeout(() => {
//         const intervalId = setInterval(() => {
//           setText(code.slice(0, i));
//           i++;
//           if (i > code.length) {
//             clearInterval(intervalId);
//           }
//         }, 15);

//         return () => clearInterval(intervalId);
//       }, animationDelay || 100);
//     }
//   }, [code, show, animated, animationDelay]);

//   // number of lines
//   const lines = text.split(/\r\n|\r|\n/).length;

//   const theme = applicationTheme === "light" ? lightTheme : darkTheme;

//   return (
//     <Highlight {...defaultProps} code={text} language={language} theme={theme}>
//       {({ className, tokens, getLineProps, getTokenProps }) => (
//         <pre
//           className={
//             className +
//             "transition-all w-fit bg-transparent duration-100 py-0 no-scrollbar"
//           }
//           style={{
//             maxHeight: show ? lines * 24 : 0,
//             opacity: show ? 1 : 0,
//           }}
//         >
//           {tokens.map((line, i) => {
//             // eslint-disable-next-line no-unused-vars
//             const { key, ...rest } = getLineProps({ line, key: i });
//             return (
//               <div key={`line-${i}`} style={{ position: "relative" }} {...rest}>
//                 {line.map((token, index) => {
//                   // eslint-disable-next-line no-unused-vars
//                   const { key, ...props } = getTokenProps({ token, i });
//                   return <span key={index} {...props} />;
//                 })}
//               </div>
//             );
//           })}
//         </pre>
//       )}
//     </Highlight>
//   );
// };

// export default Code;
