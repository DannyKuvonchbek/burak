# P-TASK
def objectToArray(obj):
    result = []

    for key in obj:
        result.append([key, obj[key]])

    return result


print(objectToArray({"a": 10, "b": 20}))

# O-TASK


def calculateSumOfNumbers(arr):
    total = 0

    for item in arr:
        if type(item) == int or type(item) == float:
            total += item

    return total


print(calculateSumOfNumbers([10, "10", {"son": 10}, True, 35]))


'''
# N-TASK
def palindrom_check(str):
    reversed_text = str[::-1]

    if str == reversed_text:
        return True
    else:
        return False

print(palindrom_check("dad"))
'''

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
