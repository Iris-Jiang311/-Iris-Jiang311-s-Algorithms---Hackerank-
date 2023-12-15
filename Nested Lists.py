

if __name__ == '__main__':
    n = int(input())
    result = []
    grades = []
    for i in range(n):
        name = input()
        score = float(input())
        result.append([name,score])
        grades.append(score)
        
    result.sort()
    grades.sort()
    
    min_score =  min(grades)
    grades.remove(min_score)
    second_min_score = min(grades)
    
    for i in range (len(result)):
        for j in range(len(result[i])):
            if result[i][j]==second_min_score:
                print(result[i][0])
        
        