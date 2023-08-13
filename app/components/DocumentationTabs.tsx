"use client"

import { FC } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/Tabs";
import SimpleBar from "simplebar-react";
import Code from "./Code";
import { nodejs, python, cpp, java, react, javascr} from "../helpers/documentation-code";
import "simplebar-react/dist/simplebar.min.css"

const DocumentationTabs: FC = () => {
  return (
    <Tabs defaultValue="nodejs" className="w-[100%] mb-5" style={{maxWidth: "40.5rem", width: "100%"}}>
      <TabsList className="mx-5 mr-3 resize ">
        <TabsTrigger className="smx-4" value="nodejs">Node JS</TabsTrigger>
        <TabsTrigger className="hidden sm:block" value="python">Python</TabsTrigger>
        <TabsTrigger value="cpp">C++</TabsTrigger>
        <TabsTrigger className="hidden sm:block" value="java">Java</TabsTrigger>
        <TabsTrigger className="hidden sm:block" value="react">React</TabsTrigger>
        <TabsTrigger className="hidden md:block" value="javascr">Javascript</TabsTrigger>
      </TabsList>
      <TabsContent value="nodejs" className="mx-5">
        <SimpleBar>
        <Code animated code={nodejs} language='javascript' show />
        </SimpleBar>
      </TabsContent>
      <TabsContent value="python" className="mx-5">
        <SimpleBar>
        <Code animated code={python} language="javascript" show />
        </SimpleBar>
      </TabsContent>
      <TabsContent value="cpp" className="mx-5">
        <SimpleBar>
        <Code animated code={cpp} language="javascript" show />
        </SimpleBar>
      </TabsContent>
      <TabsContent value="java" className="mx-5">
        <SimpleBar>
        <Code animated code={java} language="javascript" show />
        </SimpleBar>
      </TabsContent>
      <TabsContent value="react" className="mx-5">
        <SimpleBar>
        <Code animated code={react} language="javascript" show />
        </SimpleBar>
      </TabsContent>
      <TabsContent value="javascr" className="mx-5">
        <SimpleBar>
        <Code animated code={javascr} language="javascript" show />
        </SimpleBar>
      </TabsContent>
    </Tabs>
  );
};

export default DocumentationTabs;

