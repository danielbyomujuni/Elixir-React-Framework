defmodule ElixirReactFramework.Repo do
  use Ecto.Repo,
    otp_app: :elixir_react_framework,
    adapter: Ecto.Adapters.Postgres
end
