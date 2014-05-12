# PLY

* Internally, lex.py uses the re module to do its patten matching. When building the master regular expression, rules are added in the following order:
    # All tokens defined by functions are added in the same order as they appear in the lexer file.
    # Tokens defined by strings are added next by sorting them in order of decreasing regular expression length (longer expressions are added first).

