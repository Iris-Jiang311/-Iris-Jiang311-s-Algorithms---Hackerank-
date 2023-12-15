

if __name__ == '__main__':
    # n = int(input())
    result = []
    grades = []
    for _ in range(int(input())):
        name = input()
        score = float(input())
        result.append([name, score])
        grades.append(score)
        
    grades_set = set(grades)
    second_lowest = sorted(grades_set)[1]
    
    result = sorted(result, key=lambda x: (x[1], x[0]))
    
    
    # min_score = min(grades)
    # grades.remove(min_score)
    # second_min_score = min(grades)
    
    for i in range(len(result)):
        for j in range(len(result[i])):
            if result[i][j]==second_lowest:
                print(result[i][0])
        
        
