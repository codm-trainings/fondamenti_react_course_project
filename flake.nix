{
  description = "Corso fondamenti di React";

  inputs.nixpkgs.url = "nixpkgs/release-23.05";

  outputs = { self, nixpkgs }:
    let system = "x86_64-linux"; in
    with nixpkgs.legacyPackages.${system};
    {
      devShell.${system} = mkShell {
        buildInputs = [
          nodejs-18_x
        ];
      };
    };
}
