import * as vscode from "vscode";
import { Range } from "vscode";

interface Pair {
  [key: string]: string;
}

export function activate(context: vscode.ExtensionContext) {
  let provider1 = vscode.languages.registerCompletionItemProvider("oberon", {
    provideCompletionItems(
      document: vscode.TextDocument,
      position: vscode.Position
    ) {
      const lineText = document.lineAt(position.line).text;
      const prefix = lineText.slice(0, position.character);

      const suggestions = [
        "BEGIN",
        "END",
        "IF",
        "FOR",
        "REPEAT",
        "ELSIF",
        "UNTIL",
        "WHILE",
        "DO",
        "ELSE",
        "THEN",
        "CASE",
        "BY",
        "RETURN",
        "TO",
        "IS",
        "DIV",
        "MOD",
        "OR",
        "IN",
        "IMPORT",
        "BEGIN",
        "TYPE",
        "CONST",
        "MODULE",
        "VAR",
        "PROCEDURE",
        "END",
        "FALSE",
        "NIL",
        "TRUE",
        "POINTER",
        "RECORD",
        "ARRAY",
        "MAP",
        "OF",
      ];

      const filteredSuggestions = suggestions.filter((suggestion) =>
        suggestion.toLowerCase().startsWith(prefix)
      );

      const completionItems = filteredSuggestions.map((suggestion) => {
        const completionItem = new vscode.CompletionItem(suggestion);
        return completionItem;
      });

      return completionItems;
    },
  });

  context.subscriptions.push(provider1);
}

export function deactivate() {}
