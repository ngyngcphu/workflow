interface ProjectRoleProps {
  name: string;
  role: string;
  department: string;
}

interface ProjectLogProps {
  log: string;
  date: string;
  note: string;
}

export interface ProjectInterface {
  id: number;
  name: string;
  startDate: string;
  endDate: string;
  department: string;
  status: string;
  totalMemberCollab: string;
  leaderName: string;
  projectRole: ProjectRoleProps[];
  projectLog: ProjectLogProps[];
}
