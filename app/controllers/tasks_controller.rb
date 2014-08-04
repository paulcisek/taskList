class TasksController < ApplicationController
	respond_to :html, :json

	def index
		respond_with(@tasks = Task.all)
	end

	def create
		@task = Task.new(task_params)
		@task.save
		respond_with @task
	end

	private

	def task_params
		params.require(:task).permit(:title, :body)
	end
end
