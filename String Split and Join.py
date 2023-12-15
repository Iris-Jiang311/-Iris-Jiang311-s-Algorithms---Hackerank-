def split_and_join(line):
    # write your code here
    my_array=line.split(" ")
    return("-".join(my_array))

if __name__ == '__main__':
    line = input()
    result = split_and_join(line)
    print(result)