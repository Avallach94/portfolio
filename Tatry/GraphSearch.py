def bfs(graph, start_vertex, target_value):
    path = [start_vertex]
    vertex_and_path = [start_vertex, path]
    bfs_queue = [vertex_and_path]
    visited = set()
    time = 0
    while bfs_queue:
        current_vertex, path = bfs_queue.pop(0)
        visited.add(current_vertex)
        for neighbor in graph[current_vertex].get_edges():
            if neighbor not in visited:
                if neighbor == target_value:
                    path.append(neighbor)
                    for point in range(len(path) - 1):
                        time += (graph[path[point]].edges[path[point + 1]])[0]
                    return path, time

                else:
                    bfs_queue.append([neighbor, path + [neighbor]])


def dfs(graph, current_vertex, target_value, visited=None):
    if visited is None:
        visited = []

    visited.append(current_vertex)

    if current_vertex == target_value:
        return visited

    for neighbor in graph[current_vertex].get_edges():
        if neighbor not in visited:
            path = dfs(graph, neighbor, target_value, visited)

            if path:
                return path