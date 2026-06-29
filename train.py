# TASK Z
def sumEvens(arr):
    sum=0
    for n in arr:
        if(n%2==0): sum+=n
    return sum

print(sumEvens([1, 2, 3, ]))

'''# task Y
def findIntersection(arr1, arr2):
    result = []
    for n in arr1:
        if n in arr2: result.append(n)
    print(result)

findIntersection([1, 2, 3], [3, 2, 0])
'''

'''
# X-TASK
def countOccurrences(obj, data):
    count = 0

    for key, value in obj.items():
        if key == data:
            count += 1

        if isinstance(value, dict):
            count += countOccurrences(value, data)

    return count


print(countOccurrences({"model": "A", "s": {"model": "B"}}, "model"))
'''

'''
# W-TASK
def chunkArray(arr, n):
    result = []
    for i in range(0, len(arr), n):
        result.append(arr[i:i+n])
    return result

print(chunkArray([1, 2, 3, 4, 5], 2))
'''

'''
# V-TASK
def countChars(data):
    result = {}

    for a in data:
        if a in result:
            result[a] += 1
        else:
            result[a] = 1

    return result


print(countChars("hello"))
'''

'''# T-TASK
def mergeSortedArrays(data, num):
    for a in data:
        num.append(a)
    return sorted(num)


print(mergeSortedArrays([0, 3, 4], [4, 6]))
'''

'''# S-TASK
def missingNumber(nums):
    n = len(nums)
    total = n * (n + 1) // 2
    sum_nums = 0

    for num in nums:
        sum_nums += num

    return total - sum_nums

print(missingNumber([3, 0, 1]))
'''

'''
# R-TASK
def calculate(data):
    return eval(data)


print(calculate("1 + 3"))
'''

'''
# Q-TASK
def hasProperty(obj, text):
    return text in obj


print(hasProperty({"name": "BMW"}, "name"))
'''

'''
# P-TASK
def objectToArray(obj):
    result = []

    for key in obj:
        result.append([key, obj[key]])

    return result


print(objectToArray({"a": 10, "b": 20}))
'''

'''
# O-TASK


def calculateSumOfNumbers(arr):
    total = 0

    for item in arr:
        if type(item) == int or type(item) == float:
            total += item

    return total

print(calculateSumOfNumbers([10, "10", {"son": 10}, True, 35]))
'''

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
