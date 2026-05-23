def reverse_sentence(text):
    words = text.split()
    result = []

    for word in words:
        result.append(word[::-1])

    return " ".join(result)


print(reverse_sentence("we like coding!"))  # ew ekil !gnidoc
