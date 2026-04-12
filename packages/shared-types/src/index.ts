export type TaskStatus = 'todo' | 'in_progress' | 'in_review' | 'done'
export type TaskPriority = 'low' | 'medium' | 'high' | 'critical'

export interface Task {
  id: string
  title: string
  description: string | null
  status: TaskStatus
  priority: TaskPriority
  assigneeId: string | null
  projectId: string
  createdAt: string
  updatedAt: string
}

export interface Project {
  id: string
  name: string
  slug: string
  ownerId: string
  createdAt: string
}

export interface User {
  id: string
  email: string
  name: string
  avatarUrl: string | null
}

export const WEBSOCKET_EVENTS = {
  TASK_CREATED:   'task:created',
  TASK_UPDATED:   'task:updated',
  TASK_DELETED:   'task:deleted',
  USER_JOINED:    'user:joined',
} as const
