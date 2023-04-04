import { ComponentProps, FC, ReactNode } from "react";
import { BriefcaseIcon, CogIcon, DocumentTextIcon, HomeIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { AllProjects } from "../pages/projects/AllProjects";

interface RouteProps {
  title: string;
  icon: FC<ComponentProps<"svg">>;
  href: string;
  component: ReactNode;
}

export const RoutesGroup1: RouteProps[] = [
  {
    title: "Overview",
    icon: HomeIcon,
    href: "#",
    component: <></>
  },
  {
    title: "Projects",
    icon: BriefcaseIcon,
    href: "/projects",
    component: <AllProjects />
  },
  {
    title: "Members",
    icon: UserCircleIcon,
    href: "#",
    component: <></>
  }
];

export const RoutesGroup2: RouteProps[] = [
  {
    title: "Settings",
    icon: CogIcon,
    href: "#",
    component: <></>
  },
  {
    title: "Templates",
    icon: DocumentTextIcon,
    href: "#",
    component: <></>
  }
];
