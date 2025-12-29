import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  console.log('Congratulations, your extension "poc" is now active!');

  vscode.window.showInformationMessage("Hello World from poc!");
}

// This method is called when your extension is deactivated
export function deactivate() {}
