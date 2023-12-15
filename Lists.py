if __name__ == '__main__':
    N = int(input())
    my_list = []
    for i in range(N):
        s =list(input().split())
        if s[0] =='insert':
            my_list.insert(int(s[1]), int(s[2]))
        elif s[0]== 'remove':
            my_list.remove(int(s[1]))
        elif s[0] == 'append':
            my_list.append(int(s[1]))
        elif s[0]=='sort':
            my_list.sort()
        elif s[0]=='pop':
            my_list.pop()
        elif s[0]=='reverse':
            my_list.reverse()
        elif s[0]== 'print':
            print(my_list)
            