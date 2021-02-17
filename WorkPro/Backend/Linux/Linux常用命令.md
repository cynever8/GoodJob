<!--
 * @Description: 
 * @Autor: Leon
 * @Date: 2020-01-07 19:17:41
 * @LastEditors: 王一丁
 * @LastEditTime: 2021-02-09 18:37:37
 -->

# 常用命令

1. cd                   切换目录                                                             
   cd ..                跳转根目录                                                             
2. ls                   查看文件                                                            
   - -a 显示所有文件及目录 (ls内定将文件名或目录名称开头为"."的视为隐藏档，不会列出)
   - -l 除文件名称外，亦将文件型态、权限、拥有者、文件大小等资讯详细列出
   - -r 将文件以相反次序显示(原定依英文字母次序)
   - -t 将文件依建立时间之先后次序列出
   - -A 同 -a ，但不列出 "." (目前目录) 及 ".." (父目录)
   - -F 在列出的文件名称后加一符号；例如可执行档则加 "*", 目录则加 "/"
   - -R 若目录下有文件，则以下之文件亦皆依序列出
3. pwd                  查看当前位置                                                         
4. mkdir                创建文件夹/文件                                                      
5. rm -rf /var(/a.txt)  删除文件夹/文件                                                      
6. cat +文件名          查看文件内容                                                         
7. tasklist             查看进程                                                             
8. ll +文件名           罗列出当前文件或目录的详细信息，含有时间、读写权限、大小、时间等信息 
9. 查找文件                  
   - find / -name mysql 这句命令的意思是在根目录下按名字查找文件夹名叫mysql的文件夹。
   - locate命令 例如：locate \*.log 这句命令的意思是查找后缀为.log的文件
10. source /etc/profile(文件路径) 修改文件后更新文件内容
11. tar -zxvf saber.tar.gz gz文件解压
## Nginx 

1. start nginx          启动 
2. nginx -s reload      重启nginx
3. ps -ef|grep nginx    查看进程号 
4. nginx -s reopen  ：  重新打开日志文件
5. nginx -s stop  :     快速停止nginx
6. nginx -s quit  ：    完整有序的停止nginx
7. nginx -t             查看nginx.conf配置文件目录
