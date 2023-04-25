json.extract! task, :id, :description, :position, :created_at, :updated_at
json.url task_url(task, format: :json)
