#!/usr/bin/env elixir

defmodule CreateProject do
  def main([new_name]) do
    repo_url =
      "https://gitlab.nekosyndicate.com/danielb/elixir-react-framework.git"

    # Clone repo into new_name folder
    System.cmd("git", ["clone", repo_url, new_name])

    project_path = Path.expand(new_name)

    # Name formats
    snake = Macro.underscore(new_name)
    pascal = Macro.camelize(new_name)
    kebab = String.replace(snake, "_", "-")

    replacements = [
      {"elixir_react_framework", snake},
      {"ElixirReactFramework", pascal},
      {"elixir-react-framework", kebab}
    ]

    # Replace contents in all files
    project_path
    |> Path.join("**/*")
    |> Path.wildcard(match_dot: true)
    |> Enum.filter(&File.regular?/1)
    |> Enum.each(fn file ->
      {:ok, content} = File.read(file)

      new_content =
        Enum.reduce(replacements, content, fn {old, new}, acc ->
          String.replace(acc, old, new)
        end)

      if new_content != content do
        File.write!(file, new_content)
      end
    end)

    # Rename files and directories (deepest first)
    project_path
    |> Path.join("**/*")
    |> Path.wildcard(match_dot: true)
    |> Enum.sort_by(&String.length/1, :desc)
    |> Enum.each(fn path ->
      Enum.each(replacements, fn {old, new} ->
        if String.contains?(Path.basename(path), old) do
          new_path = String.replace(path, old, new)
          File.rename!(path, new_path)
        end
      end)
    end)

    # Optional: remove .git to start fresh
    git_dir = Path.join(project_path, ".git")
    if File.dir?(git_dir), do: File.rm_rf!(git_dir)

    IO.puts("✅ Project #{new_name} generated successfully!")
  end

  def main(_) do
    IO.puts("Usage: elixir create_project.exs NewProjectName")
  end
end

CreateProject.main(System.argv())
