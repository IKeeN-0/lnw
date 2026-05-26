const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()             // สร้าง Instance ของ Prisma

async function createAuthorAndBook() {
  const result = await prisma.author.create({ // สร้าง (insert) ข้อมูลในตาราง Author
    data: {
      name: "J.K. Rowling",                   // กำหนดชื่อผู้เขียน
      books: {                                // เนื่องจากสัมพันธ์กัน จึงสั่งสร้างหนังสือไปพร้อมกันเลย
        create: [                             // ใช้ create ภายใน books
          {
            title: "Harry Potter and the Philosopher's Stone"
          }
        ]
      }
    },
    include: {                                // บอก Prisma ว่าหลังจากสร้างเสร็จแล้ว
      books: true                             // ให้ดึงข้อมูลหนังสือที่สร้างพ่วงมาในตัวแปร result ด้วย
    }
  })

  console.log(result)
}

async function createCategory() {
  const category = await prisma.category.create({
    data: {
      name: "Fantasy"
    }
  })

  console.log(category)
}

async function addBookToCategory() {
  const book = await prisma.book.findFirst({            // 1. ค้นหาหนังสือที่ต้องการก่อน  
  where: {
    title: "Harry Potter and the Philosopher's Stone"
    }
  })

  await prisma.book.update({                             // 2. อัปเดตเพื่อเชื่อมความสัมพันธ์
    where: { id: book.id },                              // ระบุเล่มที่จะอัปเดตด้วย ID
    data: {
    categories: {
      connect: { name: "Fantasy" }                       // ใช้ connect เพื่อเชื่อมหนังสือเล่มนี้เข้ากับหมวดหมู่ "Fantasy" ที่มีอยู่แล้ว
      }
    },
    include: {
      categories: true                                   // ให้ส่งข้อมูลหมวดหมู่กลับมาดูด้วย
    }
  })

  console.log(book)
}

async function main() {
  await createAuthorAndBook()
  await createCategory()
  await addBookToCategory()
}

main()
  .catch(e => console.error(e))
  .finally(async () => {
    await prisma.$disconnect()                            // เมื่อทำงานเสร็จ (ไม่ว่าจะสำเร็จหรือ Error) ให้ตัดการเชื่อมต่อฐานข้อมูล
  })