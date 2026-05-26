# M-TASK
def getSquareNumbers(data):
    array = []
    for i in data:
        number = {"number": i, "square": i*i}
        array.append(number)
    return array


print(getSquareNumbers([1, 2, 3]))

# L-TASK
'''def reverse_sentence(text):
    words = text.split()
    result = []

    for word in words:
        result.append(word[::-1])

    return " ".join(result)


print(reverse_sentence("we like coding!"))
'''
