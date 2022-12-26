declare interface Method {
  name: string;
  path: string;
  description: string;
  method: "GET" | "POST" | "PUT" | "DELETE";
  parameters: Record<string, {
    type: "integer" | "number" | "string";
    required: boolean;
    description: string;
  }>
  datas: Record<string, {
    type: string;
    required: boolean;
    description: string;
  }>
  queries: Record<string, {
    type: "integer" | "number" | "string";
    required: boolean;
    description: string;
  }>
  headers: Record<string, string>
  result_example: {
    status: number;
    result?: unknown;
  }
}

declare interface Index {
  name: string;
  path: string;
  description: string;
  methods: {
    get: boolean;
    getAll: boolean;
    post: boolean;
    put: boolean;
    delete: boolean;
  }
}
