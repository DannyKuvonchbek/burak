# N-TASK
def palindrom_check(str):
    reversed_text = str[::-1]

    if str == reversed_text:
        return True
    else:
        return False


print(palindrom_check("dad"))

# M-TASK
'''
def getSquareNumbers(data):
    array = []
    for i in data:
        number = {"number": i, "square": i*i}
        array.append(number)
    return array


print(getSquareNumbers([1, 2, 3]))
'''

# L-TASK
'''def reverse_sentence(text):
    words = text.split()
    result = []

    for word in words:
        result.append(word[::-1])

    return " ".join(result)


print(reverse_sentence("we like coding!"))
'''
