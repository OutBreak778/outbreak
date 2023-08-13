import { FC } from "react";
import LargeHeading from "../../components/ui/LargeHeading";
import Paragraph from "../../components/ui/Paragraph";
import DocumentationTabs from "@/app/components/DocumentationTabs";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Similariy API",
  description: "Open Source API Fetching created by Nikhil Mishra",
};

const page: FC = () => {
  return (
    <div className="container docPage max-w-7xl mx-auto mt-4">
      <div className="flex flex-col items-center gap-2">
        <LargeHeading className="ml-6">Start Learning Language</LargeHeading>
        <Paragraph className="mx-4">Learning new things will always be good</Paragraph>
        <DocumentationTabs />
      </div>
    </div>
  );
};

export default page;
