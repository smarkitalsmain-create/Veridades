export interface ServiceItem {
  id: string;
  category: string;
  title: string;
  description: string;
  challenges: string[];
  approach: string[];
  deliverables: string[];
  benefits: string[];
  industriesServed: string[];
}

export interface IndustryItem {
  id: string;
  name: string;
  description: string;
  iconName: string;
}

export interface FrameworkStep {
  title: string;
  description: string;
}

export interface FrameworkItem {
  id: string;
  title: string;
  subtitle?: string;
  steps: FrameworkStep[];
}

export interface LeaderItem {
  id: string;
  name: string;
  role: string;
  bio: string;
}

export interface EngagementItem {
  id: string;
  category: string;
  title: string;
  challenge: string;
  approach: string;
  outcome: string;
}
